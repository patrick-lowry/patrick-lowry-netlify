import classNames from 'classnames';
import dayjs from 'dayjs';
import Markdown from 'markdown-to-jsx';
import * as React from 'react';

import { PageComponentProps } from '@/types';
import HighlightedPreBlock from '@/utils/highlighted-markdown';
import BaseLayout from '../BaseLayout';

type SimpleProjectLayout = {
    type: 'SimpleProjectLayout';
    title: string;
    bannerImage?: string;
    thumbnailImage?: string;
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
                        <h1 className="text-5xl sm:text-6xl">{title}</h1>
                        {subheader && (
                            <div className="text-2xl sm:text-3xl text-gray-600">{subheader}</div>
                        )}
                    </div>
                </header>
                {description && (
                    <div className="max-w-3xl mx-auto mb-10 text-lg sm:text-xl sm:mb-14">{description}</div>
                )}
                {bannerImage && (
                    <figure className="max-w-5xl mx-auto mb-10 sm:mb-14">
                        <img src={bannerImage} alt={title} className="w-full" />
                    </figure>
                )}
                {markdownContent && (
                    <Markdown
                        options={{ forceBlock: true, overrides: { pre: HighlightedPreBlock } }}
                        className="max-w-3xl mx-auto prose sm:prose-lg"
                    >
                        {markdownContent}
                    </Markdown>
                )}
            </article>
        </BaseLayout>
    );
};

export default Component;
