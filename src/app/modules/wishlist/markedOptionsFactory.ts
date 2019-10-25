import { MarkedOptions, MarkedRenderer } from 'ngx-markdown';

// function that returns `MarkedOptions` with renderer override
export function markedOptionsFactory(): MarkedOptions {
    const renderer = new MarkedRenderer();

    renderer.del = (text: string) => {
        return '<span class="note">' + text + '</span>';
    };
    renderer.strong = (text: string) => {
        return '<span class="important">' + text + '</span>';
    };
    renderer.paragraph = (text: string) => {
        return '<p style="margin-bottom: 0">' + text + '</p>';
    };

    return {
        renderer,
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: false,
        smartLists: true,
        smartypants: false,
    };
}
