import {NAMESPACE_NULL_VALUE} from '../inputTag';

export function formatTags (tags = []): Record<string, unknown>[] {
    return tags.map((tag: any) => {
        if (tag.namespace === NAMESPACE_NULL_VALUE) {
            return {
                ...tag,
                namespace: null
            };
        }

        return tag;
    });
}
