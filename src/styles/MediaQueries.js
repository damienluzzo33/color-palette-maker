const MediaQuery = {
    up(size) {
        const screen = {
            cell: 375,
            xs: 575.98,
            sm: 767.98,
            md: 991.98,
            lg: 1199.98,
            xl: 1575
        };
        return `@media (min-width: ${screen[size]}px)`;
    },
    down(size) {
        const screen = {
            cell: 375,
            xs: 575.98,
            sm: 767.98,
            md: 991.98,
            lg: 1199.98,
            xl: 1575
        };
        return `@media (max-width: ${screen[size]}px)`;
    }
}

export {MediaQuery};