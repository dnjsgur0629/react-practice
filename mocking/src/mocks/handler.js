import {rest} from "msw";

export const handlers = [
    rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
        const id = req.url.searchParams.get('id')  //query parameter에서 id 추출
        const originalResponse = await ctx.fetch(req);  //원래 response를 받아옴
        const originalResponseData = await originalResponse.json();
        return res(
            ctx.json({
                "data": {
                    "people":
                        [
                            ...originalResponseData.data.people,
                            {
                                "name": id,
                                "age": 27
                            },
                        ]
                }
            })
        )
    }),
    rest.get('/login', async (req, res, ctx) => {
        return res(
            ctx.status(403),
            // And a response body, if necessary
            ctx.json({
                errorMessage: `'Data' not found`,
            }),
            /*ctx.json({
              id: 'f79e82e8-c34a-4dc7-a49e-9fadc0979fda',
              firstName: 'Mock',  //firstname을 username으로 변경
              lastName: 'Maverick',
            })*/
        )
    }),

    rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
        const {value} = req.body;
        return res(
            ctx.json({
                value: value + 2,
            })
        );
    }),

    rest.get("http://localhost:3000/todo", async (req, res, ctx) => {
        return res(
            ctx.json({
                todo: {
                    task: 'Todo from server'
                }
            })
        );
    }),

    rest.get("http://localhost:3000/api/user-name", async (req, res, ctx) => {
        const id = req.url.searchParams.get("id");
        return res(
            ctx.json({
                name: id === "1" ? "The One" : "The Others"
            })
        );
    }),

    rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
        const {userId} = req.params;
        return res(
            ctx.json({
                name: `hyeok (${userId})`
            })
        );
        // return res(
        //     ctx.status(404)
        // );
    }),

    rest.get("http://localhost:3000/api/users", async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get("page");
        return res(
            ctx.json([
                    {
                        id: `1 ${pageIndex}`,
                        name: `hyeok-1 (${pageIndex})`
                    },
                    {
                        id: `2 ${pageIndex}`,
                        name: `hyeok-2 (${pageIndex})`
                    },
                    {
                        id: `3 ${pageIndex}`,
                        name: `hyeok-3 (${pageIndex})`
                    },
                    {
                        id: `4 ${pageIndex}`,
                        name: `hyeok-4 (${pageIndex})`
                    },
                    {
                        id: `5 ${pageIndex}`,
                        name: `hyeok-5 (${pageIndex})`
                    },
                ]
            )
        );
        // return res(
        //     ctx.status(404)
        // );
    }),

    rest.get("http://localhost:3000/api/projects", async (req, res, ctx) => {
        const pageIndex = req.url.searchParams.get("page");
        return res(
            ctx.json({
                prjects: [
                    {
                        id: `1 ${pageIndex}`,
                        name: `hyeok-1 (${pageIndex})`
                    },
                    {
                        id: `2 ${pageIndex}`,
                        name: `hyeok-2 (${pageIndex})`
                    },
                    {
                        id: `3 ${pageIndex}`,
                        name: `hyeok-3 (${pageIndex})`
                    },
                    {
                        id: `4 ${pageIndex}`,
                        name: `hyeok-4 (${pageIndex})`
                    },
                    {
                        id: `5 ${pageIndex}`,
                        name: `hyeok-5 (${pageIndex})`
                    },
                ],
                hasMore: pageIndex < 4,
            })
        );
    }),

    rest.get("http://localhost:3000/api/todos", async (req, res, ctx) => {
        return res(ctx.json(todos));
    }),

    rest.post("http://localhost:3000/api/todo", async (req, res, ctx) => {
        const {todo} = req.body;
        console.log(JSON.stringify(todo))
        todos.push(todo);
        return res(ctx.json(true));
    }),
];

const todos = [
    {
        id: `1 `,
        title: `apple`,
    },
    {
        id: `2 `,
        title: `banana`,
    },
    {
        id: `3 `,
        title: `melon`,
    },
    {
        id: `4 `,
        title: `pale`,
    },
    {
        id: `5`,
        title: `strawberry`,
    },
];