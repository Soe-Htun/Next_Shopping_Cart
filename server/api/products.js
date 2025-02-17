export default defineEventHandler(async (event) => {
    const data = await $fetch('https://fakestoreapi.com/products')
    if (data) {
        return data;
      } else {
        throw createError({
          statusCode: 500,
          name: 'API Error',
          message: 'API got error',
          statusMessage: 'API got error',
        });
})