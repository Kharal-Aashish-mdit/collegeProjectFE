// import React from "react";
// import { useState } from "react";
// import { Button, TextInput } from "@mantine/core";
// import axios from "axios";
// import { useForm } from "@mantine/form";

// type registerFormData = {
//   fullName: string;
//   userName: string;
//   email: string;
//   password: string;
//   contact: number;
// };

// function RegisterForm() {
//   const form = useForm<registerFormData>({
//     initialValues: {
//       fullName: "",
//       userName: "",
//       email: "",
//       password: ''
//     },
//     validate:{
//       fullName: (d)=> {
//         if(!d) return "Required"
//       }
//     }
//   });

//   const handleFormSubmit = (data: registerFormData) => {

//     //?backend server
//     console.log(data);
//   };

//   return (
//     <form onSubmit={form.onSubmit(handleFormSubmit)}>
//       <TextInput label="Full Name" {...form.getInputProps('fullName')} />
//       <TextInput label="Full Name" {...form.getInputProps('email')} />
//       <Button type="submit">
//         Register
//       </Button>
//     </form>
//   );
// }

// export default RegisterForm
