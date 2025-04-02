<script>
    export let data;
    let devToArticles = data.devToArticles;
    const blackListedArticles = [422939];
    const articles = [...devToArticles];
    const filteredArticles = articles.filter((article) => !blackListedArticles.includes(article?.id));
</script>

<svelte:head>
    <title>Huy Ngo — Blog & Resume</title>
</svelte:head>

<div class="container">
    <!-- Resume Section -->
    <section class="resumeContainer">
        <h1>Huy Ngo</h1>
        <p>huytngo00@gmail.com ❖ (714) 725-4395 ❖ Costa Mesa, CA ❖ Portfolio Website</p>

        <h2>Work Experience</h2>
        <div>
            <h3>Software Product Engineer</h3>
            <p><strong>Innova Electronics Corporation</strong> — Irvine, CA</p>
            <p><em>August 22, 2022 – Present</em></p>
            <ul>
                <li>Spearhead the development and execution of strategic roadmaps for multi-platform products.</li>
                <li>Lead weekly status meetings, manage Jira tickets, and ensure critical milestones are met.</li>
                <li>Collaborate with cross-functional teams to align product features with business goals.</li>
                <li>Design and enhance PowerBI dashboards and SQL-based reports for actionable insights.</li>
                <li>Successfully delivered major feature integrations, driving new revenue streams.</li>
            </ul>
        </div>

        <h2>Skills</h2>
        <ul>
            <li><strong>Project & Product Management:</strong> Agile Methodologies, Strategic Roadmapping, PRDs, Cross-Functional Collaboration.</li>
            <li><strong>Data Analytics & Reporting:</strong> SQL, PowerBI, GA4, Statistical Modeling, Data-Driven Decision Making.</li>
            <li><strong>Design & Development:</strong> UI/UX Design (Figma, Sveltekit), HTML, CSS, JavaScript, C++, C#, Python.</li>
            <li><strong>Tools & Technologies:</strong> Microsoft Office, Google Workspace, Jira, Git/GitHub, SQL Server, PostgreSQL.</li>
            <li><strong>Languages:</strong> English, Mandarin Chinese, Vietnamese.</li>
        </ul>
    </section>

    <!-- Articles Section -->
    <section class="articlesContainer">
        <div class="articles">
            <h1>Articles</h1>
            {#each filteredArticles as article}
                <div class="article">
                    <div class="header">
                        <h2>{article.title}</h2>
                        <div>Tags: {article.tags || article.category}</div>
                    </div>
                    <p>{article.description || 'No description available.'}</p>
                    <a
                        href={article.id ? `/blog/${article.id}` : article.link}
                        target={!article.id ? '_blank' : '_self'}
                    >
                        <div class="button">Read More</div>
                    </a>
                </div>
            {/each}
            {#if filteredArticles.length === 0}
                <div class="no-articles">
                    <h2>No Articles Found</h2>
                    <p>It seems there are no articles to display at the moment. Please check back later!</p>
                </div>
            {/if}
        </div>
    </section>
</div>

<style>
    .container {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 1em;
    }

    /* Resume Section */
    .resumeContainer {
        background: #f9f9f9;
        padding: 2rem;
        border-radius: 10px;
        margin-bottom: 2rem;
    }
    .resumeContainer h1, .resumeContainer h2, .resumeContainer h3 {
        color: #333;
    }
    .resumeContainer ul {
        padding-left: 20px;
    }
    .resumeContainer ul li {
        margin-bottom: 0.5em;
    }

    /* Articles Section */
    .articlesContainer {
        margin-bottom: 2em;
    }
    .articlesContainer .articles {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 40px;
        margin-top: 30px;
    }
    .article {
        background: #111;
        color: white;
        padding: 2rem;
        border-radius: 25px;
        transition: transform 0.2s ease-in-out;
    }
    .article:hover {
        transform: scale(1.02);
    }
    .article p {
        color: #708090;
    }
    .button {
        display: inline-block;
        padding: 10px;
        border: 2px solid white;
        color: white;
        text-align: center;
    }

    /* No Articles Styling */
    .no-articles {
        text-align: center;
        color: #666;
        background: #f9f9f9;
        padding: 2rem;
        border-radius: 10px;
        margin-top: 2rem;
    }
    .no-articles h2 {
        color: #333;
    }
</style>