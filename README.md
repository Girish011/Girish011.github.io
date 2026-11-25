# Girish's portfolio

Astro site, served by GitHub Pages at https://girish011.github.io/. Deploys on every push to `main`.

## Add content

Everything is a Markdown file under `src/content/`:

| To add | Create | Required front matter |
|---|---|---|
| A project | `projects/<slug>.md` | `title`, `summary`, optional `tags`, `repo`, `link`, `featured`, `order` |
| A blog post | `blog/<project-slug>/NN-name.md` | `title`, `description`, `project` (the project slug), `order` |
| A paper | `papers/<slug>.md` | `title`, `authors`, `venue`, `year`, optional `url` |
| A certification | `certifications/<slug>.md` | `title`, `issuer`, `date`, optional `url` |
| A job | `experience/<slug>.md` | `role`, `company`, `start`, optional `end`, `order` |

Images go in `public/images/<project-slug>/` and are used as `/images/<project-slug>/file.png`.
Link between posts with `/blog/<project-slug>/NN-name/`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```
