import classNames from 'classnames';
import dayjs from 'dayjs';

import { Action, Link } from '@/components/atoms';
import ImageBlock from '@/components/molecules/ImageBlock';
import ArrowUpRightIcon from '@/components/svgs/arrow-up-right';
import { mapStylesToClassNames as mapStyles } from '@/utils/map-styles-to-class-names';
import Section from '../Section';

export default function ProjectFeedSection(props) {
    const { elementId, colors, variant = 'variant-a', title, subtitle, actions = [], styles = {}, ...rest } = props;
    const sectionAlign = styles.self?.textAlign ?? 'left';
    return (
        <Section elementId={elementId} colors={colors} styles={styles.self}>
            {title && (
                <h2 className={classNames('text-2xl sm:text-3xl', mapStyles({ textAlign: sectionAlign }))}>{title}</h2>
            )}
            {subtitle && (
                <p
                    className={classNames('text-2xl sm:text-3xl', mapStyles({ textAlign: sectionAlign }), {
                        'mt-6': title
                    })}
                >
                    {subtitle}
                </p>
            )}
            {variant === 'variant-d' ? (
                <ProjectList {...rest} hasTopMargin={!!(title || subtitle)} headingLevel={title ? 'h3' : 'h2'} />
            ) : (
                <ProjectGrid
                    {...rest}
                    variant={variant}
                    hasTopMargin={!!(title || subtitle)}
                    headingLevel={title ? 'h3' : 'h2'}
                />
            )}
            {actions?.length > 0 && (
                <div
                    className={classNames(
                        'flex flex-wrap items-center gap-4 mt-10',
                        sectionAlign === 'center' ? 'justify-center' : 'justify-end'
                    )}
                >
                    {actions.map((action, index) => (
                        <Action key={index} {...action} />
                    ))}
                </div>
            )}
        </Section>
    );
}

function ProjectGrid(props) {
    const {
        variant,
        projects = [],
        showDate,
        showSubtitle,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'md:grid-cols-2 md:items-stretch': variant === 'variant-a',
                'md:grid-cols-3 md:items-stretch': variant === 'variant-b',
                'justify-center': variant === 'variant-c',
                'gap-x-6 lg:gap-x-8': variant !== 'variant-c',
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => {
                const displayImage = project.thumbnailImage || project.featuredImage;
                return (
                    <Link key={index} href={project} className="flex flex-col h-full max-w-3xl pb-10 border-b border-current group">
                        {showFeaturedImage && displayImage && (
                            <div className="w-full mb-6 overflow-hidden aspect-3/2">
                                <ImageBlock
                                    {...displayImage}
                                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                        )}
                        {showDate && project.date && (
                            <div className="mb-3">
                                <ProjectDate date={project.date} />
                            </div>
                        )}
                        <TitleTag className="text-xl sm:text-2xl">{project.title}</TitleTag>
                        {showSubtitle && project.subtitle && <p className="mt-3 text-base">{project.subtitle}</p>}
                        {showReadMoreLink && (
                            <div className="mt-auto pt-8">
                                <span className="inline-flex text-xl transition rounded-full p-4 border-2 border-current group-hover:bottom-shadow-6 group-hover:-translate-y-1.5">
                                    <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                </span>
                            </div>
                        )}
                    </Link>
                );
            })}
        </div>
    );
}

function ProjectList(props) {
    const {
        projects = [],
        showDate,
        showSubtitle,
        showFeaturedImage,
        showReadMoreLink,
        hasTopMargin,
        headingLevel
    } = props;
    if (projects.length === 0) {
        return null;
    }
    const TitleTag = headingLevel;
    return (
        <div
            className={classNames('grid gap-y-12', {
                'mt-12': hasTopMargin
            })}
        >
            {projects.map((project, index) => {
                const displayImage = project.thumbnailImage || project.featuredImage;
                return (
                    <Link key={index} href={project} className="block pb-10 border-b border-current group md:pb-12 md:px-4">
                        <div className="flex flex-col gap-8 md:flex-row md:items-center">
                            {showFeaturedImage && displayImage && (
                                <div className="md:shrink-0 md:self-stretch md:w-48">
                                    <div className="w-full overflow-hidden aspect-3/2 md:min-h-full">
                                        <ImageBlock
                                            {...displayImage}
                                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="md:grow">
                                {showDate && project.date && (
                                    <div className="mb-3">
                                        <ProjectDate date={project.date} />
                                    </div>
                                )}
                                <TitleTag className="text-xl sm:text-2xl">{project.title}</TitleTag>
                                {showSubtitle && project.subtitle && (
                                    <p className="mt-3 text-base">{project.subtitle}</p>
                                )}
                            </div>
                            {showReadMoreLink && (
                                <div className="md:mx-4">
                                    <span className="inline-flex text-xl transition rounded-full p-4 border-2 border-current md:text-3xl group-hover:bottom-shadow-6 group-hover:-translate-y-1.5">
                                        <ArrowUpRightIcon className="fill-current w-icon h-icon" />
                                    </span>
                                </div>
                            )}
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

function ProjectDate({ date }) {
    const dateTimeAttr = dayjs(date).format('YYYY-MM-DD HH:mm:ss');
    const formattedDate = dayjs(date).format('YYYY-MM-DD');
    return <time dateTime={dateTimeAttr}>{formattedDate}</time>;
}
