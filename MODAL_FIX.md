# Modal Integration Plan

The issue: You created ProjectModal.astro but it's never been connected to index.astro.

## What needs to happen:

1. Import ProjectModal in index.astro
2. Add <ProjectModal /> component before </body>
3. Convert ALL 18 tiles from `<a>` or `<div>` to `<button onclick="openProjectModal('id')">`
4. Update navigation links in Site Header.astro to call openProjectModal

## Project IDs needed (from projects.json):
- thatwhichisheard
- hitandrun  
- thehallpass
- pckw
- bmwm4gt4
- halfwaybroken
- cayennetastedrive
- porschexpuma (MISSING from current tiles!)
- offonanisland
- cayenne2024
- pecdakar
- myporscheapp
- pcv
- driveyourownpath
- volvoawareness
- teachplay
- vinfast
- canadiantire

Total: 18 projects

Please confirm you want me to:
1. Add ALL 18 projects as clickable tiles
2. Make them ALL open the ProjectModal (not link to dedicated pages)
3. Update the navigation drawer links

Type "yes" to proceed with complete modal integration.
