
import { useForm } from "react-hook-form";

const StudentRegistration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Form submitted:", data);

    alert(
      "Registration successful!\n" +
        JSON.stringify(data, null, 2)
    );
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        Student Registration
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        
        <div>
          <label className="block text-sm font-medium mb-1">
            Student Name
          </label>

          <input
            type="text"
            {...register("studentName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
              pattern: {
                value: /^[A-Za-z ]+$/,
                message: "Only letters and spaces are allowed",
              },
            })}
            className="w-full p-2 border rounded"
          />

          {errors.studentName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.studentName.message}
            </p>
          )}
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-1">
            Email
          </label>

          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email format",
              },
            })}
            className="w-full p-2 border rounded"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email.message}
            </p>
          )}
        </div>

    
        <div>
          <label className="block text-sm font-medium mb-1">
            Grade Level
          </label>

          <select
            {...register("gradeLevel", {
              required: "Please select a grade",
            })}
            className="w-full p-2 border rounded"
          >
            <option value="">Select Grade</option>
            <option value="9">Grade 9</option>
            <option value="10">Grade 10</option>
            <option value="11">Grade 11</option>
            <option value="12">Grade 12</option>
          </select>

          {errors.gradeLevel && (
            <p className="text-red-500 text-sm mt-1">
              {errors.gradeLevel.message}
            </p>
          )}
        </div>

        
        <div>
          <label className="block text-sm font-medium mb-2">
            Subject Interests
          </label>

          <div className="space-y-2">
            {["Mathematics", "Science", "English"].map(
              (subject, index) => (
                <label
                  key={subject}
                  className="flex items-center"
                >
                  <input
                    type="checkbox"
                    value={subject}
                    {...register("subjects", {
                      validate: (value) =>
                        (value && value.length > 0) ||
                        "Select at least one subject",
                    })}
                    className="mr-2"
                  />

                  {subject}
                </label>
              )
            )}
          </div>

          {errors.subjects && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subjects.message}
            </p>
          )}
        </div>

        
        <button
          type="submit"
          className="w-full bg-rose-500 text-white py-2 rounded hover:bg-rose-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentRegistration;
