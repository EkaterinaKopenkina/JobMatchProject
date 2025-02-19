import UiAccountLayout from "../uikit/ui-account-layout";
import UiGrid4 from "../uikit/ui-grid-4";
import UiShortItem from "../uikit/short-item/ui-short-item";
import UiShortClose from "../uikit/short-item/ui/ui-short-close"
import UiShortAdd from "../uikit/short-item/ui/ui-short-add"
import UiRating from "../uikit/ui-rating";
import { RESUME_DATA } from "./model/constants";

const Resume = ({router}) => {
    return (
        <UiAccountLayout title="Мои резюме">
            <UiGrid4 className="resume">
                {RESUME_DATA.map(resume => 
                {
                    const rating = new Array(resume.rating).fill(0);
                    return <UiShortItem key={resume.id}
                        href={`/account-applicant/create-resume/${resume.id}`}
                        className="resume__item"
                        title={resume.title}
                        close={<UiShortClose />}
                        rating={<UiRating rating={rating} />}
                        router={router}
                        />
                })}
                <UiShortAdd href="create-resume"/>
            </UiGrid4>
        </UiAccountLayout>
    )
}

export default Resume;