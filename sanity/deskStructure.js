export const myStructure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.list()
            .title("Settings Documents")
            .items([
              S.listItem()
                .title("Main Navigation")
                .child(
                  S.document().schemaType("mainNav").documentId("mainNav")
                ),
              S.listItem()
                .title("Site Settings")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                ),
              S.listItem()
                .title("Colors")
                .child(S.document().schemaType("colors").documentId("colors")),
            ])
        ),
      // S.listItem()
      //   .title("Memory Items")
      //   .items([S.listItem().title("memory").child()]),

      ...S.documentTypeListItems().filter(
        (listItem) =>
          !["siteSettings", "mainNav", "colors"].includes(listItem.getId())
      ),
    ]);
