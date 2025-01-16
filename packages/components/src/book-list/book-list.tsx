import { List, ListItem, ListItemText } from "@mui/material"
import React from "react"

export const BookList = ({ books }: {
    books: string[]
}) => {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
            {/* {generate(
                <ListItem>
                  <ListItemText
                    primary="Single-line item"
                    secondary={secondary ? 'Secondary text' : null}
                  />
                </ListItem>,
              )} */}

            {books.map((book) => (
                <ListItem>
                    <ListItemText
                        primary={book}
                    />
                </ListItem>
            ))}

        </List>
    )
}