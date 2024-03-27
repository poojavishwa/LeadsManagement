import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import LeadsPage from "./LeadPage";

const Leads = () => {
  return (
    <div>
      <Tabs>
        <TabList className="flex w-auto ml-4 cursor-pointer space-x-3">
          <Tab>LEADS</Tab>
          <Tab>LEAD PIPELINE</Tab>
        </TabList>
        <TabPanel>
          <LeadsPage />
        </TabPanel>
      </Tabs>
    </div>
  );
};
export default Leads;
