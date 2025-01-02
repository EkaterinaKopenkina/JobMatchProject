import Sidebar from "../sidebar"
import { myResume, myVacancy, returnLkFirm, returnLkApplicant, vacancies } from "./constants"

export const getSidebar = (currentUrl, isActive, setActive) => {
    const burgerState = {
        isActive: isActive,
        setActive: setActive
    }

    if (currentUrl.includes("account-firm")) {
        if (currentUrl.includes("create-vacancy")) {
            return <Sidebar 
                burgerState={burgerState}
                navList={[returnLkFirm, myVacancy]}
            />
        }
        if (currentUrl.includes("vacancies")) {
            return <Sidebar 
                burgerState={burgerState}
                navList={[returnLkFirm, myVacancy]}
                activeItem={1}
            />
        }

        return <Sidebar 
            burgerState={burgerState}
            navList={[myVacancy]}
        />
    }
    if (currentUrl.includes("account-applicant")) {
        if (currentUrl.includes("vacancies")) {
            return <Sidebar 
                burgerState={burgerState}
                navList={[returnLkApplicant, myResume, vacancies]}
                activeItem={2}
            />
        }
        if (currentUrl.includes("resume") || currentUrl.includes("create-resume")) {
            return <Sidebar 
                burgerState={burgerState}
                navList={[returnLkApplicant, myResume, vacancies]}
                activeItem={1}
            />
        }

        return <Sidebar 
            burgerState={burgerState}
            navList={[myResume, vacancies]}
        />
    }
}