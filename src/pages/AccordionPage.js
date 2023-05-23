import Accordion from "../components/Accordion";

function AccordionPage() {
  const items = [
    {
      id: 1,
      label: "Can I use React on a project?",
      content: "You can use React.",
    },
    {
      id: 2,
      label: "Can I use Javascript on a project?",
      content: "You can use Javascript.",
    },
    {
      id: 3,
      label: "Can I use Css on a project?",
      content: "You can use Css.",
    },
  ];

  return <Accordion items={items} />;
}

export default AccordionPage;
