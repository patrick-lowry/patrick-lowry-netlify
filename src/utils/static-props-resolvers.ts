import { ConfigModel } from '.stackbit/models/Config';
import { ThemeStyleModel } from '.stackbit/models/ThemeStyle';
import {
    Config,
    ContentObject,
    ContentObjectType,
    GlobalProps,
    PageComponentProps,
    PostFeedLayout,
    PostLayout,
    ProjectFeedLayout,
    ProjectLayout,
    RecentPostsSection,
    RecentProjectsSection,
    ThemeStyle
} from '@/types';
import { deepMapObject } from './data-utils';

export function resolveStaticProps(urlPath: string, allData: ContentObject[]): PageComponentProps {
    const originalPage = allData.find((obj) => obj.__metadata.urlPath === urlPath);
    const globalProps: GlobalProps = {
        site: allData.find((obj) => obj.__metadata.modelName === ConfigModel.name) as Config,
        theme: allData.find((obj) => obj.__metadata.modelName === ThemeStyleModel.name) as ThemeStyle
    };

    function enrichContent(value: any) {
        const type = value?.__metadata?.modelName;
        if (type && PropsResolvers[type]) {
            const resolver = PropsResolvers[type];
            return resolver(value, allData);
        } else {
            return value;
        }
    }

    const enrichedPage = deepMapObject(originalPage, enrichContent) as ContentObject;
    return {
        ...enrichedPage,
        global: globalProps
    };
}

type ResolverFunction = (props: ContentObject, allData: ContentObject[]) => ContentObject;

const PropsResolvers: Partial<Record<ContentObjectType, ResolverFunction>> = {
    PostFeedLayout: (props, allData) => {
        const allPosts = getAllPostsSorted(allData);
        return {
            ...(props as PostFeedLayout),
            items: allPosts
        };
    },
    RecentPostsSection: (props, allData) => {
        const recentPosts = getAllPostsSorted(allData).slice(0, (props as RecentPostsSection).recentCount || 3);
        return {
            ...props,
            posts: recentPosts
        };
    },
    ProjectLayout: (props, allData) => {
        const allProjects = getAllProjectsSorted(allData);
        const currentProjectId = props.__metadata?.id;
        const currentProjectIndex = allProjects.findIndex((project) => project.__metadata?.id === currentProjectId);
        const nextProject = currentProjectIndex > 0 ? allProjects[currentProjectIndex - 1] : null;
        const prevProject = currentProjectIndex < allProjects.length - 1 ? allProjects[currentProjectIndex + 1] : null;
        return {
            ...props,
            prevProject,
            nextProject
        };
    },
    // SimpleProjectLayout: Convert image URL strings to ImageBlock objects
    // The markdown files store thumbnailImage and bannerImage as simple strings (e.g., "/images/photo.png")
    // but the ImageBlock component expects an object with url, altText, etc.
    // This resolver transforms the strings into proper ImageBlock objects to avoid null/undefined issues
    SimpleProjectLayout: (props) => {
        const result: any = { ...props };
        const title = (props as any).title || 'Project';

        // Convert thumbnailImage string to ImageBlock object (used in project listing pages)
        if ((props as any).thumbnailImage && typeof (props as any).thumbnailImage === 'string') {
            result.thumbnailImage = {
                __metadata: {
                    id: `${props.__metadata.id}-thumbnail`,
                    modelName: 'ImageBlock',
                    modelLabel: 'Image Block'
                },
                type: 'ImageBlock',
                url: (props as any).thumbnailImage,
                altText: title  // Use project title as alt text (never empty/null)
            };
        }

        // Convert bannerImage string to ImageBlock object (used at top of project page)
        if ((props as any).bannerImage && typeof (props as any).bannerImage === 'string') {
            result.bannerImage = {
                __metadata: {
                    id: `${props.__metadata.id}-banner`,
                    modelName: 'ImageBlock',
                    modelLabel: 'Image Block'
                },
                type: 'ImageBlock',
                url: (props as any).bannerImage,
                altText: title  // Use project title as alt text (never empty/null)
            };
        }

        return result;
    },
    ProjectFeedLayout: (props, allData) => {
        const allProjects = getAllProjectsSorted(allData);
        return {
            ...(props as ProjectFeedLayout),
            items: allProjects
        };
    },
    RecentProjectsSection: (props, allData) => {
        const recentProjects = getAllProjectsSorted(allData).slice(
            0,
            (props as RecentProjectsSection).recentCount || 3
        );
        return {
            ...props,
            projects: recentProjects
        };
    }
};

function getAllPostsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) => object.__metadata?.modelName === 'PostLayout') as PostLayout[];
    const sorted = all.sort((postA, postB) => new Date(postB.date).getTime() - new Date(postA.date).getTime());
    return sorted;
}

function getAllProjectsSorted(objects: ContentObject[]) {
    const all = objects.filter((object) =>
        object.__metadata?.modelName === 'ProjectLayout' || object.__metadata?.modelName === 'SimpleProjectLayout'
    ) as ProjectLayout[];
    const sorted = all.sort(
        (projectA, projectB) => new Date(projectB.date).getTime() - new Date(projectA.date).getTime()
    );
    return sorted;
}
