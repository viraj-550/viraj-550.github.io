// OPTIONAL: Automatic Abstract Extraction
// Replace the manual researchData with this function to fetch abstracts from QMD files

async function fetchAbstractFromQMD(href) {
  try {
    const response = await fetch(href.replace('.html', '.qmd'));
    const text = await response.text();
    
    // Extract abstract from YAML frontmatter or content
    const abstractMatch = text.match(/abstract:\s*["']([^"']+)["']/i) || 
                         text.match(/## Abstract\s*\n\n([^\n]+)/i);
    
    return abstractMatch ? abstractMatch[1].trim() : null;
  } catch (error) {
    console.log('Could not fetch abstract for:', href);
    return null;
  }
}

// Then use it in your forEach loop:
// const abstract = await fetchAbstractFromQMD(href);
// if (abstract) { /* add abstract section */ }
