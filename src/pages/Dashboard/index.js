import React from "react";
import { StatCard, Card, Button, Modal, Alert } from "../../components";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { GeneralContext } from "../../contexts";

const Dashboard = (props) => {
  const { setActivePage, setBreadcrumb, setModal } = React.useContext(
    GeneralContext.Context
  );

  React.useEffect(() => {
    setActivePage("Dashboard");
    setBreadcrumb([
      {
        path: "/",
        name: "Home",
      },
      {
        name: "Dashboard",
      },
    ]);
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-wrap lg:flex-no-wrap mb-3">
        <StatCard
          title="Profit"
          icon={faDollarSign}
          className="w-full lg:w-1/4"
        >
          Rp 50.000
        </StatCard>
        <StatCard
          title="Profit"
          icon={faDollarSign}
          className="w-full lg:w-1/4 ml-0 mt-3 lg:mt-0 lg:ml-3"
          theme="warning"
        >
          Rp 50.000
        </StatCard>
        <StatCard
          title="Profit"
          icon={faDollarSign}
          className="w-full lg:w-1/4 ml-0 mt-3 lg:mt-0 lg:ml-3"
          theme="danger"
        >
          Rp 50.000
        </StatCard>
        <StatCard
          title="Profit"
          icon={faDollarSign}
          className="w-full lg:w-1/4 ml-0 mt-3 lg:mt-0 lg:ml-3"
          theme="success"
        >
          Rp 50.000
        </StatCard>
      </div>
      <Card>
        <Button
          theme="danger"
          type="button"
          onClick={() => setModal("testModal")}
        >
          Modal Trigger
        </Button>
        <Modal id="testModal" title="Ngebacot"></Modal>
      </Card>
    </React.Fragment>
  );
};

export default Dashboard;
