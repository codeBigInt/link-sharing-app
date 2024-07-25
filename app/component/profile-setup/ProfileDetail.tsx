import Card from '@/app/UI/Card'
import { ChangeEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LiaImageSolid } from "react-icons/lia";


type FormFields = {
  firstname: string;
  lastname: string;
  email: string;
};

const ProfileDetail = () => {

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { register, handleSubmit, watch, reset } = useForm<FormFields>();

    const watchForEmail = watch("firstname", "");
    const watchForPassword = watch("lastname", "");

    //Server logic for form submission
    async function onSubmit(data: FormFields) {

        console.log(data);
    }

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      // You can perform additional actions here, such as uploading the file
    }
  };

  const handleLabelClick = () => {
    const fileInput = document.getElementById('pictureUpload') as HTMLInputElement;
    fileInput.click();
  };


  return (
    <Card className='w-full shadow-md lg:shadow-none'>
      <div className='flex flex-col gap-2'>
        <h3 className='md:text-heading-m text-[24px] font-bold text-dark'>Profile Details</h3>
        <p>Add your details to create a personal touch to your profile.</p>
      </div>
      <div className='p-4 flex gap-4 text-[12px] bg-gray-light my-8 rounded-lg'>
        <div className='w-[33.3%] rounded-lg h-[193px] hidden md:flex items-center'>Profile picture</div>
        <label htmlFor='pictureUpload' className='md:w-[33.3%] w-[70%] bg-primary-lighter text-primary rounded-lg md:h-[193px] h-[230px] flex flex-col items-center justify-center text-center cursor-pointer'>
          <span className="text-[40px]"><LiaImageSolid /></span>
          <p className="mt-2 text-sm">+ Upload Image</p>
          <input
            type="file"
            name="pictureUpload"
            id="pictureUpload"
            className="hidden"
            onChange={handleFileChange}
          />
          {selectedFile && (
            <p className="mt-2 text-sm text-gray-700">Selected file: {selectedFile.name}</p>
          )}
        </label>
        <div className='w-[33.3%] rounded-lg hidden md:flex flex-col justify-center h-[193px]'>
          <span>Image must be 1024&times;1024px</span>
          <span>Use PNG or JPG format.</span>
        </div>
      </div>
      <div className='p-4 flex gap-4 text-[12px] bg-gray-light my-8 rounded-lg'>
        <form
          className="flex w-full flex-col gap-8 px-1 md:px-8 py-10 rounded-lg bg-transparnt md:w-[674px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* <div className="flex flex-col gap-4"> */}
            <div className="flex items-center w-full gap-2">
              <label htmlFor="firstname" className='w-[20%]'>Firstname*</label>
                <input
                  className="border border-gray rounded-lg flex-1 p-4"
                  {...register("firstname", {
                    required: true,
                  })}
                  placeholder="eg John"
                  type="email"
                />
            </div>
            <div className="flex items-center w-full gap-4">
              <label htmlFor="lastname" className='w-[20%]'>Lastname*</label>
              <input
                className="border border-gray rounded-lg flex-1 p-4"
                type="password"
                {...register("lastname", {
                  required: true,
                })}
                placeholder="Appleseed"
              />
            </div>
            <div className="flex items-center w-full gap-4">
              <label htmlFor="email" className='w-[20%]'>Email</label>
              <input
                className="border border-gray rounded-lg flex-1 p-4"
                type="password"
                {...register("email")}
                placeholder="eg exaample@gmail.com"
              />
            </div>
            <div className="flex w-full gap-4">
          </div>
        </form>
      </div>
    </Card>
  )
}

export default ProfileDetail
