# To generate LODE documentation for bibliotek-o

* Create a temporary copy of `bibliotek-o.owl`.
* In the temporary file, replace `skos:definition` with `rdfs:comment`. LODE does not recognize `skos:definition`.
* Navigate to `http://www.essepuntato.it/lode` and upload the temporary OWL file.
* Save the result as `/doc/lode/bibliotek-o.html`. Save as Webpage, HTML Only; this saves the CSS and Javascript inline in the HTML file rather than in separate files.
* Delete the temporary OWL file.
* In `/tools/fix-lode-anchors.py`, change the prefix variable value to the new `owl:versionIRI`. For example, if the new `owl:versionIRI` is `1.1`, the code will read `prefix = 'http://bibliotek-o.org/1.1/ontology/'`.
* From the `/tools` directory, run `fix-lode-anchors.py` on the HTML file. This outputs a new file `/doc/lode/ontology.html` with meaningful anchors. (The name and location of both the input OWL file and the output HTML file are hard-coded into the script.) 
* Delete the original `/doc/lode/bibliotek-o.html` file.
* In `ontology.html`, find the anchor around "Ontology source" and change the href value to the current `owl:versionIRI`.
* Commit the `/doc/lode/ontology.html` file to the repository.
* Copy the HTML file to the subdirectory under `/site/` where the new version resides.
