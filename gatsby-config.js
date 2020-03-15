module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/wangsir/4aa9f38276ff453a93746fd355863e06?v=d9e9246c76ab4025a2b7d57714ec6ea8"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/wangsir/9e01b973f5044259afaccbe05ad89154?v=48bcd81f87bd444d87c5a47e69d6a328"
            }
        }
    ],
}
