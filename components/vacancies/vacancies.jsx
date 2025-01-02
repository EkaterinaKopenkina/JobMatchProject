import UiAccountLayout from "../uikit/ui-account-layout"
import { vacancies } from "./model/constants";
import UiGrid4 from "../uikit/ui-grid-4";
import UiShortItem from "../uikit/short-item/ui-short-item";
import UiShortEdit from "../uikit/short-item/ui/ui-short-edit"
import UiShortClose from "../uikit/short-item/ui/ui-short-close"
import UiShortAdd from "../uikit/short-item/ui/ui-short-add"

const Vacancies = () => {
    return (
        <UiAccountLayout title="Мои вакансии">
            <UiGrid4 className="vacancies">
                {vacancies.map((vacancy) => 
                    <UiShortItem key={vacancy.id}
                        className='vacancies__item'
                        href={`vacancies/${vacancy.id}`}
                        title={vacancy.title}
                        subtitle={`Заявки: ${vacancy.applications}`}
                        edit={<UiShortEdit href={`create-vacancy/${vacancy.id}`}/>}
                        close={<UiShortClose />}
                    />
                )}
                <UiShortAdd href="create-vacancy" className='vacancies__item'/>
            </UiGrid4>
        </UiAccountLayout>
    )
}

export default Vacancies;