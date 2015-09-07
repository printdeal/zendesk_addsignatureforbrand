# Zendesk Add Signature for Brand App

This app is developed to work together with the "[Create Ticket for brand App](https://github.com/zendesklabs/create_ticket_for_brand_app)", which can be found on the [Zendesk Labs](https://github.com/zendesklabs) Github.

## Functionality

The app adds a placeholder to the end of every public comment of the ticket, before it is submitted. When a ticket is updated without a comment, or when a private comment is placed, no placeholder will be added.

## Installation instructions

1. Install the "Create Ticket for brand App" and follow all installation instructions.
2. Install this app
3. Create a dynamic content item, and call it something like "signature"
4. Go to the settings of this app, and fill in the dynamic content placeholder (like: {{dc.signature}} )

## Dynamic Content

The dynamic content placeholder should look something like this:

```
{% case ticket.ticket_field_option_title_24431341 %}
{% when 'Brand 1' %}
Kind regards,

{{current_user.name}}

Brand 1
012-3456789
{% when 'Brand 2' %}
Kind regards,

{{current_user.name}}

Brand 2
0123-456789
{% endcase %}
```
