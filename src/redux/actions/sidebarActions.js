export const MOBILE_SIDEBAR_VISIBILITY = 'MOBILE_SIDEBAR_VISIBILITY';
export const WEB_SIDEBAR_VISIBILITY = 'WEB_SIDEBAR_VISIBILITY';

export function modifySidebarVisibility() {
    return {
        type: WEB_SIDEBAR_VISIBILITY,
    };
}

export function modifyMobileSidebarVisibility() {
    return {
        type: MOBILE_SIDEBAR_VISIBILITY,
    };
}
