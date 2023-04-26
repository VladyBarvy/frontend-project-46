/*
[
  {
    "key": "common",
    "type": "nested",
    "children": [
      {
        "key": "follow",
        "type": "added",
        "value": false
      },
      {
        "key": "setting1",
        "type": "unchanged",
        "value": "Value 1"
      },
      {
        "key": "setting2",
        "type": "removed",
        "value": 200
      },
      {
        "key": "setting3",
        "type": "updated",
        "removedValue": true,
        "addedValue": null
      },
      {
        "key": "setting4",
        "type": "added",
        "value": "blah blah"
      },
      {
        "key": "setting5",
        "type": "added",
        "value": {
          "key5": "value5"
        }
      },
      {
        "key": "setting6",
        "type": "nested",
        "children": [
          {
            "key": "doge",
            "type": "nested",
            "children": [
              {
                "key": "wow",
                "type": "updated",
                "removedValue": "",
                "addedValue": "so much"
              }
            ]
          },
          {
            "key": "key",
            "type": "unchanged",
            "value": "value"
          },
          {
            "key": "ops",
            "type": "added",
            "value": "vops"
          }
        ]
      }
    ]
  },
  {
    "key": "group1",
    "type": "nested",
    "children": [
      {
        "key": "baz",
        "type": "updated",
        "removedValue": "bas",
        "addedValue": "bars"
      },
      {
        "key": "foo",
        "type": "unchanged",
        "value": "bar"
      },
      {
        "key": "nest",
        "type": "updated",
        "removedValue": {
          "key": "value"
        },
        "addedValue": "str"
      }
    ]
  },
  {
    "key": "group2",
    "type": "removed",
    "value": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    }
  },
  {
    "key": "group3",
    "type": "added",
    "value": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    }
  }
]
*/
export default
`[
  {
    "name": "common",
    "value": [
      {
        "name": "follow",
        "value": false,
        "status": "added"
      },
      {
        "name": "setting1",
        "value": "Value 1",
        "status": "unchanged"
      },
      {
        "name": "setting2",
        "value": 200,
        "status": "removed"
      },
      {
        "name": "setting3",
        "oldValue": true,
        "value": null,
        "status": "updated"
      },
      {
        "name": "setting4",
        "value": "blah blah",
        "status": "added"
      },
      {
        "name": "setting5",
        "value": {
          "key5": "value5"
        },
        "status": "added"
      },
      {
        "name": "setting6",
        "value": [
          {
            "name": "doge",
            "value": [
              {
                "name": "wow",
                "oldValue": "",
                "value": "so much",
                "status": "updated"
              }
            ],
            "status": "nested"
          },
          {
            "name": "key",
            "value": "value",
            "status": "unchanged"
          },
          {
            "name": "ops",
            "value": "vops",
            "status": "added"
          }
        ],
        "status": "nested"
      }
    ],
    "status": "nested"
  },
  {
    "name": "group1",
    "value": [
      {
        "name": "baz",
        "oldValue": "bas",
        "value": "bars",
        "status": "updated"
      },
      {
        "name": "foo",
        "value": "bar",
        "status": "unchanged"
      },
      {
        "name": "nest",
        "oldValue": {
          "key": "value"
        },
        "value": "str",
        "status": "updated"
      }
    ],
    "status": "nested"
  },
  {
    "name": "group2",
    "value": {
      "abc": 12345,
      "deep": {
        "id": 45
      }
    },
    "status": "removed"
  },
  {
    "name": "group3",
    "value": {
      "deep": {
        "id": {
          "number": 45
        }
      },
      "fee": 100500
    },
    "status": "added"
  }
]`;