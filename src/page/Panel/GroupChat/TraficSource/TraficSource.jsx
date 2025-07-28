import Selector from "../../../../components/Selector";

const TraficSource = () => {
  return (
    <div>
      <Selector
        asli={true}
        fontSize={22}
        mt={"mt-14"}
        item={["Chat", "Trafic Source", "Inbox"]}
      />
    </div>
  );
};

export default TraficSource;
