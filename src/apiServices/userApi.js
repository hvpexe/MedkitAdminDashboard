import request from 'utils/request';
export const getList = async () => {
    try {
        const res = await request.get('User/pagination?pageIndex=1&pageSize=10');
        return res.data;
    } catch (error) {
        console.log(error);
    }
};