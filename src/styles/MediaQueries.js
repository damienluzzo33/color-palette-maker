const MediaQuery = {
    up() {},
    down(size) {
        const screen = {
            xs: 575.98,
            sm: 767.98,
            md: 991.98,
            lg: 1199.98
        };
        return `@media (max-width: ${screen[size]}px)`;
    }
}

export {MediaQuery};