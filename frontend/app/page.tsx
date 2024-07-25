import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar relative flex-1 overflow-y-auto px-[5%] my-auto">
                <div className="mx-auto flex size-full flex-col py-10 max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        width={1000}
                        height={1000}
                        alt="Patient"
                        className="mb-12 h-10 w-fit"
                    />

                    <PatientForm />

                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">
                            © 2024 CareHub
                        </p>
                        <Link href="/?admin=true" className="text-green-500">
                            Admin
                        </Link>
                    </div>
                </div>
            </section>

            <Image
                src="/assets/images/onboarding-img.jpg"
                width={1000}
                height={1000}
                alt="Patient"
                className="hidden h-full object-cover md:block max-w-[50%]"
            />
        </div>
    );
}
