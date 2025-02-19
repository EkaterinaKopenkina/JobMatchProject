import UiAccountLayout from "../uikit/ui-account-layout";
import { DATA_VACANCY } from "./model/constants";
import UiGrid3 from "../uikit/ui-grid-3";
import UiRating from "../uikit/ui-rating";
import UiFullItem from "../uikit/full-item/ui-full-item";
import UiFullInfo from "../uikit/full-item/ui/ui-full-info";

const Vacancy = () => {
    return (
        <UiAccountLayout title={`Вакансия "${DATA_VACANCY.vacancy}"`}>
            <UiGrid3 className="vacancy">
                {DATA_VACANCY.applications.map(appl => {
                    const rating = new Array(appl.rating).fill(0);
                    return <UiFullItem key={appl.id}
                        name={appl.name}
                        info={[
                            <UiFullInfo key={Number(`${appl.id}1`)} title="Опыт работы" value={appl.experience} isDescription={false}/>,
                            <UiFullInfo key={Number(`${appl.id}2`)} title="Оклад" value={`от ${appl.salary_from} до ${appl.salary_to}`} isDescription={false} />,
                            <UiFullInfo key={Number(`${appl.id}3`)} title="Занятость" value={appl.busyness} isDescription={false} />,
                            <UiFullInfo key={Number(`${appl.id}4`)} title="Описание" value={appl.description} isDescription={true} />,
                        ]}
                        phone={appl.phone}
                        rating={<UiRating rating={rating} />} 
                        btns={["Принять", "Отклонить"]}
                    />
                })}
            </UiGrid3>
        </UiAccountLayout>
    )
}

export default Vacancy;