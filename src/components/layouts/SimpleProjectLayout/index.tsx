import classNames from 'classnames';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { PageComponentProps } from '@/types';
import HighlightedPreBlock from '@/utils/highlighted-markdown';
import ImageBlock from '@/components/molecules/ImageBlock';
import BaseLayout from '../BaseLayout';

type SimpleProjectLayout = {
    type: 'SimpleProjectLayout';
    title: string;
    bannerImage?: any; // Can be string (from markdown) or ImageBlock object (after resolver)
    thumbnailImage?: any; // Can be string (from markdown) or ImageBlock object (after resolver)
    shortDescription?: string;
    description?: string;
    subheader?: string;
    date?: string;
    markdownContent?: string;
};

type ComponentProps = PageComponentProps & SimpleProjectLayout;

const Component: React.FC<ComponentProps> = (props) => {
    const {
        title,
        bannerImage,
        description,
        subheader,
        date,
        markdownContent
    } = props;

    const formattedDate = date ? dayjs(date).format('YYYY-MM-DD') : null;

    return (
        <BaseLayout {...props}>
            <article className="px-4 py-14 lg:py-20">
                <header className="max-w-5xl mx-auto mb-10 sm:mb-14">
                    <div className="flex flex-col gap-6">
                        {formattedDate && (
                            <time className="text-lg" dateTime={date}>
                                {formattedDate}
                            </time>
                        )}
                        <h1 className="text-4xl sm:text-5xl">{title}</h1>
                        {subheader && (
                            <div className="text-xl sm:text-2xl text-gray-600">{subheader}</div>
                        )}
                    </div>
                </header>
                {/* Use ImageBlock component for consistency with project listings */}
                {bannerImage && (
                    <figure className="max-w-5xl mx-auto mb-10 sm:mb-14">
                        <ImageBlock {...bannerImage} className="w-full" />
                    </figure>
                )}
                {markdownContent && (
                    <Markdown
                        options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                        className="max-w-4xl mx-auto prose prose-sm sm:prose-base"
                    >
                        {markdownContent}
                    </Markdown>
                )}
            </article>
        </BaseLayout>
    );
};

export default Component;
