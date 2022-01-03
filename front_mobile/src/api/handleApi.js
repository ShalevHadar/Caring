import axios from "axios";
export default axios.create({
  baseURL: "http://a9d5-2a0d-6fc2-55a0-3000-8d09-ae60-7e03-71ef.ngrok.io/api",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNoYWxldmVsYWRoaXRAZ21haWwuY29tIiwiaWF0IjoxNjQxMjEzMTU4LCJleHAiOjE2NDEyMjAzNTh9.55kSHooJVxA8wt5h5IL78lvGl5DYYt8Eg1r1XzvNsUU",
  },
});
