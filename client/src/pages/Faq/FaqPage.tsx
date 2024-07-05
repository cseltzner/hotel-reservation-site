import styles from "./FaqPage.module.scss";
import * as Accordion from '@radix-ui/react-accordion';
import ChevronRight from "../../components/Icons/ChevronRight.tsx";

const FaqPage = () => {
    return (
        <main className={styles.faqPage}>
            <div className={styles.imgBanner}>
                <img src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720133232/hotel-site/faq/hotel-lobby.jpg"
                     alt="Hotel lobby with employees at the check-in counter"/>
            </div>
            <div className={styles.faqContainer}>
                <div className="container">
                    <h1>Frequently Asked Questions</h1>
                    <div className={styles.faqGrid}>
                        <div className={styles.faqGridInfo}>
                            <div className={styles.faqImg}>
                                <img
                                    src="https://res.cloudinary.com/dnxdsagpg/image/upload/v1720132369/hotel-site/faq/hotel-waiting-room.jpg"
                                    alt="Hotel waiting area outside of an auditorium"/>
                            </div>
                            <div className={styles.faqInfo}>
                                <h2>Information</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A id sapiente tempora.</p>
                            </div>
                            <div className={styles.faqInfo}>
                                <h2>Management</h2>
                                <p>Aliquam animi cumque maiores modi nesciunt quo reprehenderit.</p>
                            </div>
                        </div>
                        <div className={styles.faqGridAccordion}>
                            <Accordion.Root type="single" collapsible className={styles.accordionRoot}>
                                <Accordion.Item value="item-1" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>What events are available
                                        during my stay? <div className={styles.chevron}><ChevronRight/></div>
                                    </Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dicam verterem cotidieque has ea. Dolore offendit id sed. Quidam invenire
                                        dissentiunt an pri. Eruditi periculis eu nec, tota democritum ex qui. Sanctus
                                        corpora pro at, ex debitis voluptatum sed. An eam viris corpora detracto, dictas
                                        antiopam ad qui.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-2" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>Where are you located? <div
                                        className={styles.chevron}><ChevronRight/></div></Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dolorum inciderint at has. Sea ei persius tibique suavitate, cu mei tritani
                                        minimum, summo ubique ad qui. Te cibo epicurei sea, id eam offendit luptatum
                                        theophrastus. Ut doctus accumsan interpretaris vel, facilis conceptam eu usu,
                                        zril nonumy graeco his te.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-3" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>What restaurants are
                                        nearby? <div className={styles.chevron}><ChevronRight/></div>
                                    </Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dicam verterem cotidieque has ea. Dolore offendit id sed. Quidam invenire
                                        dissentiunt an pri. Eruditi periculis eu nec, tota democritum ex qui. Sanctus
                                        corpora pro at, ex debitis voluptatum sed. An eam viris corpora detracto, dictas
                                        antiopam ad qui.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-4" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>Do you provide travel from
                                        the airport? <div className={styles.chevron}><ChevronRight/></div>
                                    </Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dolorum inciderint at has. Sea ei persius tibique suavitate, cu mei tritani
                                        minimum, summo ubique ad qui. Te cibo epicurei sea, id eam offendit luptatum
                                        theophrastus. Ut doctus accumsan interpretaris vel, facilis conceptam eu usu,
                                        zril nonumy graeco his te.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-5" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>What time are the swimming
                                        pools open? <div className={styles.chevron}><ChevronRight/></div>
                                    </Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dicam verterem cotidieque has ea. Dolore offendit id sed. Quidam invenire
                                        dissentiunt an pri. Eruditi periculis eu nec, tota democritum ex qui. Sanctus
                                        corpora pro at, ex debitis voluptatum sed. An eam viris corpora detracto, dictas
                                        antiopam ad qui.
                                    </Accordion.Content>
                                </Accordion.Item>
                                <Accordion.Item value="item-6" className={styles.accordionItem}>
                                    <Accordion.Trigger className={styles.accordionTrigger}>Can I bring pets? <div
                                        className={styles.chevron}><ChevronRight/></div></Accordion.Trigger>
                                    <Accordion.Content className={styles.accordionContent}>
                                        Dolorum inciderint at has. Sea ei persius tibique suavitate, cu mei tritani
                                        minimum, summo ubique ad qui. Te cibo epicurei sea, id eam offendit luptatum
                                        theophrastus. Ut doctus accumsan interpretaris vel, facilis conceptam eu usu,
                                        zril nonumy graeco his te.
                                    </Accordion.Content>
                                </Accordion.Item>
                            </Accordion.Root>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FaqPage;