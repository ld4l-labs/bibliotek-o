# To generate LODE documentation for bibliotek-o

  * Create a temporary copy of bibliotek-o.owl.

  * In the temporary file, replace `skos:definition` with `rdfs:comment`. LODE does not recognize `skos:definition`.

  * Navigate to <http://www.essepuntato.it/lode> and upload the temporary OWL file.

  * Save the result as `doc/LODE/bibliotek-o.html`. Save as Webpage, HTML only - 
this saves the CSS and Javascript in the HTML file rather than in separate files.

  * Delete the temporary OWL file.

  * Navigate to the tools directory and run `fix-lode-anchors.py` on the HTML file. (The name and location of the HTML file are hard-coded into the script.) This outputs a new file ontology.html with meaningful anchors.

  * Delete the original `LODE/bibliotek-o.html` file.

  * In `ontology.html`, find the anchor around "Ontology Source" and change the href value to `http://bibliotek-o.org/ontology.owl`.

  * Commit the `ontology.html` file to the repository under `doc/LODE`.
