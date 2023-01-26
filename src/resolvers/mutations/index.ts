export const mutations = {
    createBook: (parent, args, ctx) => {
        console.log(parent, args, ctx);
        return args.book;
    }
}
