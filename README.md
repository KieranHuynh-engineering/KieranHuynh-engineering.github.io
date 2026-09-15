# Engineering Portfolio — Site Source

Plain HTML/CSS/JS. No build step, no framework — works as-is on GitHub Pages.

## 1. Where to put your photos

Each project has its own folder under `images/`. Drop JPGs/PNGs in with the
**exact filenames** below, and they'll appear automatically — nothing else to
edit. Until a file exists, that spot shows a placeholder box with corner
brackets and a label telling you what goes there and the recommended size.

```
images/
  seagull/
    hero.jpg             2400×1000  wide banner at top of project page
    card-thumb.jpg        1200×750  homepage card thumbnail
    mark-01.jpg            900×675  bare electronics on the bench
    mark-02.jpg            900×675  laser-cut plywood test housing
    mark-04.jpg             900×675 housing with counterweight
    mark-07.jpg             900×675 first 3D-printed shell
    mark-12.jpg             900×675 mounting / charging port detail
    mark-15.jpg             900×675 final housing, branded
    final-assembly.jpg     1600×900 full assembled unit

  robotic-arm/
    hero.jpg              2400×1000
    card-thumb.jpg         1200×750
    mark-01.jpg              900×675  kinematic layout / servo placement
    mark-02.jpg              900×675  base and shoulder structural supports

  usyd-motorsport/
    hero.jpg               2400×1000
    card-thumb.jpg          1200×750
    fea-fos.jpg             1600×900  factor of safety plot
    fea-fastener.jpg        1600×900  deformation at fastener region
    geometry-comparison.jpg 1600×900  initial → final geometry side by side

  usyd-rocketry/
    hero.jpg                2400×1000
    card-thumb.jpg           1200×750
    deployed.jpg             1600×900  rail guide extended, on the rail
    retracted.jpg            1600×900  rail guide flush, in flight

  beerbound/
    hero.jpg                 2400×1000
    card-thumb.jpg            1200×750
    architecture.jpg          1600×900  system diagram (can be a real diagram, not a photo)
    gps-filtering.jpg         900×675  app screen / screenshot

  metso-turbimax/
    hero.jpg                  2400×1000
    card-thumb.jpg             1200×750
    annotated-cad.jpg          1600×900  exploded / annotated CAD render
    final-assembly.jpg         1600×900  finished mount
```

Any image you don't have yet is fine to skip — the placeholder just stays
until you add it. Recommended sizes are a guide, not a hard requirement;
images are cropped to fit (`object-fit: cover`), so anything reasonably
close in aspect ratio will look fine.

**To insert a photo**, open the relevant HTML file and replace the
`<div class="photo-slot">...</div>` block with a plain image tag, e.g.:

```html
<!-- before -->
<div class="photo-slot" style="--ratio:16/9">
  <span class="corner-l"></span><span class="corner-r"></span>
  <span class="photo-slot__label">FEA — factor of safety plot<br><small>images/usyd-motorsport/fea-fos.jpg</small></span>
</div>

<!-- after -->
<img src="../images/usyd-motorsport/fea-fos.jpg" alt="FEA factor of safety plot across bracket iterations">
```

(On the homepage, `index.html`, image paths don't need the `../` prefix —
only files inside `projects/` do, since they sit one folder deeper.)

## 2. Personal details to fill in

Search each HTML file for these placeholders and swap in your own:

- `YOUR NAME` — appears in the header brand and footer of every page
- `you@example.com` — footer email link (in every file's `<footer>`)
- `github.com/yourusername`, `linkedin.com/in/yourusername` — footer links
- `Resume (PDF)` link — currently points nowhere (`href="#"`); either link
  to a hosted PDF or remove it
- `<title>` tags and the meta description in each `<head>` — currently say
  "— Your Name"

## 3. Running it locally

No build tools needed. From this folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## 4. Deploying to GitHub Pages (free hosting)

1. Create a new GitHub repository (public, so Pages can serve it for free).
2. Push this folder's contents to the repo root:
   ```bash
   cd portfolio-site
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. On GitHub: go to the repo's **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Under **Branch**, choose `main` and `/ (root)`, then **Save**.
6. Wait a minute or two — GitHub will give you a live URL at
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

If you name the repo `YOUR-USERNAME.github.io` exactly, it publishes at the
shorter `https://YOUR-USERNAME.github.io/` instead (no repo name in the URL).

## 5. File structure

```
index.html               homepage
projects/*.html           the 6 project case-study pages
css/style.css              all styling — one shared stylesheet
js/main.js                  mobile nav toggle only
images/                       your photos go here (see above)
```
