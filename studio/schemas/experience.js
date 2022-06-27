/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'company',
      title: 'Company',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'company',
        maxLength: 96,
      },
    },
    {
      name: 'startDate',
      title: 'Start date',
      type: 'date',
    },
    {
      name: 'endDate',
      title: 'End date',
      type: 'date',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
  ],
};
