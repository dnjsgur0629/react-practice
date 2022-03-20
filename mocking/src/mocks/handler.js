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
    rest.get("http://localhost:3000/api/user/:userId", async (req, res, ctx) => {
        const {userId} = req.params;
        return res(
            ctx.json({
                name: `hyeok (${userId})`
            })
        );
        /*return res(
            ctx.status(400)
        );*/
    }),

    rest.put("http://localhost:3000/counter/increment", async (req, res, ctx) => {
      const {value} = req.body;
      return res(
        ctx.json({
          value: value + 2,
        })
      );
    }),
]