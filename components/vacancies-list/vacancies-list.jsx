import UiAccountLayout from "../uikit/ui-account-layout";
import UiGrid3 from "../uikit/ui-grid-3";
import { DATA_VACANCIES } from "./model/constants";
import UiFullItem from "../uikit/full-item/ui-full-item";
import UiFullInfo from "../uikit/full-item/ui/ui-full-info";

const VacanciesPage = () => {
    return (
        <UiAccountLayout title="Вакансии">
            <UiGrid3 className="vacancies-list">
                {DATA_VACANCIES.map(vacancy => <UiFullItem key={vacancy.id}
                        name={vacancy.title}
                        info={[
                            <UiFullInfo key={1} title="Занятость" value={vacancy.busyness} isDescription={false}/>,
                            <UiFullInfo key={2} title="Оклад" value={`от ${vacancy.salary_from} до ${vacancy.salary_to}`} isDescription={false} />,
                            <UiFullInfo key={3} title="Опыт работы" value={vacancy.experience} isDescription={false} />,
                        ]}
                        btns={["Резюме"]}
                    />
                )}
            </UiGrid3>
        </UiAccountLayout>
    )
}

export default VacanciesPage;