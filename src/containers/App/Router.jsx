import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainWrapper from './MainWrapper';
import Layout from '../Layout/index';

import Alerts from '../UI/Alerts/index';
import Buttons from '../UI/Buttons/index';
import Carousel from '../UI/Carousel/index';
import Collapse from '../UI/Collapse/index';
import Modals from '../UI/Modals/index';
import Notifications from '../UI/Notification/index';
import Panels from '../UI/Panels/index';
import ProgressBars from '../UI/ProgressBars/index';
import RangeSliders from '../UI/RangeSliders/index';
import Tabs from '../UI/Tabs/index';
import Timeline from '../UI/Timeline/index';
import Tooltips from '../UI/Tooltips/index';
import Typography from '../UI/Typography/index';

import NotFound404 from '../DefaultPage/404/index';
import Calendar from '../DefaultPage/Calendar/index';
import FAQ from '../DefaultPage/Faq/index';
import Gallery from '../DefaultPage/Gallery/index';
import PricingCards from '../DefaultPage/PricingCards/index';
import TextEditor from '../DefaultPage/TextEditor/index';
import InvoiceTemplate from '../DefaultPage/InvoiceTemplate/index';
import SearchResults from '../DefaultPage/SearchResults/index';
import ProjectSummary from '../DefaultPage/ProjectSummary/index';

import Profile from '../Account/Profile/index';
import EmailConfirmation from '../Account/EmailConfimation/index';
import LockScreen from '../Account/LockScreen/index';
import LogIn from '../Account/LogIn/index';
import LogInPhoto from '../Account/log_in_photo/index';
import Register from '../Account/Register/index';
import RegisterPhoto from '../Account/RegisterPhoto/index';

import BasicForm from '../Form/BasicForm/index';
import FormDropzone from '../Form/FormDropzone/index';
import FileUpload from '../Form/FileUpload/index';
import FormLayouts from '../Form/FormLayouts/index';
import CheckFormControls from '../Form/CheckFormControls/index';
import FormValidation from '../Form/FormValidation/index';
import MaskForm from '../Form/MaskForm/index';
import WizardForm from '../Form/WizardForm/index';
import MaterialForm from '../Form/MaterialForm/index';
import FloatingLabelsForm from '../Form/FloatingLabelsForm/index';
import FormPicker from '../Form/FormPicker/index';


import HomeDashboard from '../Dashboards/HomeDashboard/index';
import SolarDashboard from '../Dashboards/SolarDashboard/index';
import UsageDashboard from '../Dashboards/UsageDashboard/index';
import SettingsDashboard from '../Dashboards/SettingsDashboard/index';
import HistoryDashboard from '../Dashboards/HistoryDashboard/index';

import Appliance1 from '../Dashboards/AppliancesDashboard/Appliance1/index';
import Appliance2 from '../Dashboards/AppliancesDashboard/Appliance2/index';

import Mail from '../Mail/index';


const UI = () => (
    <Switch>
        <Route path="/ui/alerts" component={Alerts}/>
        <Route path="/ui/buttons" component={Buttons}/>
        <Route path="/ui/carousel" component={Carousel}/>
        <Route path="/ui/collapse" component={Collapse}/>
        <Route path="/ui/modals" component={Modals}/>
        <Route path="/ui/notifications" component={Notifications}/>
        <Route path="/ui/panels" component={Panels}/>
        <Route path="/ui/progress_bars" component={ProgressBars}/>
        <Route path="/ui/range_sliders" component={RangeSliders}/>
        <Route path="/ui/tabs" component={Tabs}/>
        <Route path="/ui/timeline" component={Timeline}/>
        <Route path="/ui/tooltips" component={Tooltips}/>
        <Route path="/ui/typography" component={Typography}/>
    </Switch>
);

const Forms = () => (
    <Switch>
        <Route path="/forms/basic_form" component={BasicForm}/>
        <Route path="/forms/check_form_controls" component={CheckFormControls}/>
        <Route path="/forms/file_upload" component={FileUpload}/>
        <Route path="/forms/floating_labels_form" component={FloatingLabelsForm}/>
        <Route path="/forms/form_dropzone" component={FormDropzone}/>
        <Route path="/forms/form_layouts" component={FormLayouts}/>
        <Route path="/forms/form_picker" component={FormPicker}/>
        <Route path="/forms/form_validation" component={FormValidation}/>
        <Route path="/forms/mask_form" component={MaskForm}/>
        <Route path="/forms/material_form" component={MaterialForm}/>
        <Route path="/forms/wizard_form" component={WizardForm}/>
    </Switch>
);

const Account = () => (
    <Switch>
        <Route path="/account/profile" component={Profile}/>
        <Route path="/account/email_confirmation" component={EmailConfirmation}/>
    </Switch>
);

const DefaultPages = () => (
    <Switch>
        <Route path="/default_pages/calendar" component={Calendar}/>
        <Route path="/default_pages/faq" component={FAQ}/>
        <Route path="/default_pages/gallery" component={Gallery}/>
        <Route path="/default_pages/invoice_template" component={InvoiceTemplate}/>
        <Route path="/default_pages/pricing_cards" component={PricingCards}/>
        <Route path="/default_pages/project_summary" component={ProjectSummary}/>
        <Route path="/default_pages/search_results" component={SearchResults}/>
        <Route path="/default_pages/text_editor" component={TextEditor}/>
    </Switch>
);

const Usage = () => (
    <Switch>
        <Route exact path="/usage" component={UsageDashboard}/>
    </Switch>
);

const Commerce = () => (
    <Switch>
        <Route exact path="/solar" component={SolarDashboard}/>
    </Switch>
);

const Appliance = () => (
    <Switch>
        <Route path={"/appliance/1"} component={Appliance1}/>
        <Route path={"/appliance/2"} component={Appliance2}/>
    </Switch>
);

const wrappedRoutes = () => (
    <div>
        <Layout/>
        <div className="container__wrap">
            <Route path="/appliance" component={Appliance}/>
            <Route path="/dashboard_e_commerce" component={Commerce}/>
            <Route path="/home" component={HomeDashboard}/>
            <Route path="/usage" component={Usage}/>
            <Route path="/solar" component={SolarDashboard}/>
            <Route path="/settings" component={SettingsDashboard}/>
            <Route path="/history" component={HistoryDashboard}/>
            <Route path="/ui" component={UI}/>
            <Route path="/mail" component={Mail}/>
            <Route path="/forms" component={Forms}/>
            <Route path="/account" component={Account}/>
            <Route path="/default_pages" component={DefaultPages}/>
        </div>
    </div>
);

const Router = () => (
    <MainWrapper>
        <main>
            <Switch>
                <Route exact path="/" component={LogIn}/>
                <Route path="/404" component={NotFound404}/>
                <Route path="/lock_screen" component={LockScreen}/>
                <Route path="/log_in" component={LogIn}/>
                <Route path="/log_in_photo" component={LogInPhoto}/>
                <Route path="/register" component={Register}/>
                <Route path="/register_photo" component={RegisterPhoto}/>
                <Route path="/" component={wrappedRoutes}/>
            </Switch>
        </main>
    </MainWrapper>
);

export default Router;
