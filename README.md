#pat-masonry

A Patternslib pattern for Masonry (http://masonry.desandro.com )

## Documentation

Property            | Default Value                               | Description
--------------------|---------------------------------------------|----------------------
column-width		|     240                                     | The width of a column of a horizontal grid
container-style		| "{ position: 'relative' }"                  | CSS styles to be applied to the container element
gutter		        |      10                                     | Horizontal space between item elements
hidden-style		| "{ opacity: 0, transform: 'scale(0.001)' }" | Style applied to hide elements 
is-fit-width		|      false                                  | Set the width of the element to fit the available number of columns
is-origin-left		|      true                                   | Controls the horizontal flow of the layout. By default, item elements start positioning at the left.
is-origin-top		|      true                                   | Controls the vertical flow of the layout. By default, item elements start positioning at the top.
item-selector		|     ".item"                                 | Specifies the child elements to be used as item elements. 
stamp		        |     ""                                      | Specifies which elements are stamped (fixed) within the layout.
transition-duration	|     "0.4s"                                  | Length of time during which elements change layout.
visible-style		| "{ opacity: 1, transform: 'scale(1)' }"     | Style applied to reveal hidden elements.
