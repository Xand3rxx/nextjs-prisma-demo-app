import { useForm } from "react-hook-form";
import Divider from "./Divider";

interface FormErrorProp {
  errorMessage: string;
}
const FormError = (props: FormErrorProp) => {
  return <p className="mt-1 text-red-500">{props.errorMessage}</p>;
};

interface CreateContactFormProps {
  onSubmit: any;
}

export default function CreateContactForm(props: CreateContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <form
      id="create-contact-form"
      className="flex flex-col"
      onSubmit={handleSubmit(props.onSubmit)}
    >
      <Divider>
        <input
          className="w-full p-4 text-xl rounded"
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: true, maxLength: 25 })}
        />
        {errors.firstName && (
          <FormError errorMessage="First Name is required" />
        )}
      </Divider>
      <Divider>
        <input
          className="w-full p-4 text-xl rounded"
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: true, maxLength: 25 })}
        />
        {errors.lastName && <FormError errorMessage="Last Name is required" />}
      </Divider>
      <Divider>
        <input
          className="w-full p-4 text-xl rounded"
          type="email"
          placeholder="Email Address"
          {...register("email", { required: true, maxLength: 25 })}
        />
        {errors.email && <FormError errorMessage="Email is required" />}
      </Divider>
      <Divider>
        <input
          className="w-full p-4 text-xl rounded"
          type="url"
          placeholder="Avatar"
          {...register("avatar", {
            required: true,
            value: "https://github.com/Xand3rxx.png",
          })}
        />
        {errors.avatar && (
          <FormError errorMessage="Link to Avatar is required" />
        )}
      </Divider>

      <button
        className="p-4 text-blue-100 bg-blue-500 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}
