app in dev stage

TODO:

1. User Screen
[ ] add password change
[ ] add email change
[ ] add account deletion
[ ] add shortcuts to the recipes, the shopping cart and the planner
[ ] add statistics

2. Recipes
[ ] add filters and browsing
[ ] add own recepies marker
[ ] implement adding recipes to the planner
[ ] implement adding recipes to the shopping cart
[ ] add notice about how adding to the shopping cart via planner differs to adding to the shopping cart directly
[ ] implement adding recipes to favourites

4. Planner
[ ] add moving recipes between days
[ ] add deleting recipes
[ ] add adding recipes to the shopping cart

5. Shopping cart
[ ] add functionality for handling products
[ ] add multiple shopping carts

6. UI
[ ] make fonts consistent
[ ] make spacing reactive and consistent
[ ] make text reactive size consistent
[ ] make a mobile version
[ ] make a dark / light mode switch

8. Supabase
[ ] add tables
[ ] populate them with recipes

9. Other
[ ] configure the mailing service
[ ] make fallback recipes more real (low priority)
[ ] make a cookie announcement + selection screen

DONE:

[x] App skeleton
[x] About page
[x] Main page layout
[x] Logging in
[x] Signing up (together with e-mail verification)
[x] UI for logging / signing in
[x] UI for displaying recipe details
[x] Fallback recipes (for when the server is unreachable)
[x] AI gen text and images for fallback recipes
[x] Icons for various buttons / functionality
[x] Configured themes

NOTES:
- The most demanding task thus far was understanding hwo the authorization works and how to connect SSR (Server Side Rendering) with CSR (Client Side Rendering). Supabase documentation is a tad sparse, which, compared with lack of resources about the new version of the Svelte framework, was a real struggle ...But, exactly for that same reason, it was great fun to figure it out and make it work correctly (and safely + reliably)!




