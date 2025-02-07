// // import { meals } from '@/types/mealTypes';
// import axiosInstance from './axios';

// const BASE_PATH = '/meals'

// interface CreateReqOrder {
//     id: string
//     name: string
//     description: string
//     price: number
//     isAvailable: boolean

// }

// interface UpdateReqOrder {
//     id: string
//     name: string
//     description: string
//     price: number
//     isAvailable: boolean


// }

// export const mealService = {
//     // Save a meal to the database
//     async saveMeal(order: CreateReqOrder) {
//         try {
//         const response = await axiosInstance.post(`${BASE_PATH}/save`, meal);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     // Fetch Order - get all orders
//     async fetchOrder() {
//         try{
//         const response = await axiosInstance.get(`${BASE_PATH}/get`);
//             return response.data;
//         } catch(error) {
//             console.log(error);
//         }
//     },

//     // Fetch Single Order
//     async getOrdersByCustomerId(id: string) {
//         try {
//             const response = await axiosInstance.get(`${BASE_PATH}/${id}`);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     async fetchOrderById(customerId: string) {
//         try {
//             const response = await axiosInstance.get(`${BASE_PATH}/customer/${customerId}`);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     // Update Order
//     async updateOrder(order: UpdateReqOrder) {
//         if (!order.id) {
//             new Error('Order ID is required for update');
//         }
//         try {
//             const response = await axiosInstance.put(`${BASE_PATH}/${order.id}`, order);
//             return response.data;
//         } catch (error) {
//             console.log(error);
//         }
//     },

//     // Delete Order
//     async deleteOrder(id: string) {
//         try {
//             await axiosInstance.delete(`${BASE_PATH}/${id}`);
//         } catch (error) {
//             console.log(error);
//         }
//     },
// };