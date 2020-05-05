// 声明插件
const myPlugin = {
    install(Vue) {
        // 渲染函数组件 -- 函数式组件
        Vue.component("heading-functional", {
            functional: true,
            props: {
                title: {
                    type: String,
                    default: "",
                },
                level: {
                    type: String,
                    required: true,
                },
                icon: {
                    type: String,
                },
            },
            render(h, context) {
                console.log("this上下文", context);
                let children = [];
                const { title, level, icon } = context.props;
                if (icon) {
                    children.push(
                        h("svg", { class: "icon" }, [
                            h("use", { attrs: { "xlink:href": "#icon-" + icon } }),
                        ])
                    );
                }
                children = children.concat(context.children);
                const vnode = h("h" + level, { attrs: { title } }, children);
                return vnode;
            },
        });
    }
}
export default myPlugin;