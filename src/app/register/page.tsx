import RegisterForm from "@/components/RegisterForm"
import Header from "@/components/Header"

export default function register() {
    return(
        <div className="container mx-auto px-4 py-8">
            <Header />
            <RegisterForm />
        </div>
    )
}