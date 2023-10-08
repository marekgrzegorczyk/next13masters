import type { DocumentNode } from "graphql";
export const typeDefs = {
	kind: "Document",
	definitions: [
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
			interfaces: [],
			directives: [],
			fields: [],
			loc: { start: 0, end: 10 },
		},
		{
			kind: "ObjectTypeExtension",
			name: { kind: "Name", value: "Query", loc: { start: 23, end: 28 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "product", loc: { start: 33, end: 40 } },
					arguments: [
						{
							kind: "InputValueDefinition",
							name: { kind: "Name", value: "id", loc: { start: 41, end: 43 } },
							type: {
								kind: "NonNullType",
								type: {
									kind: "NamedType",
									name: {
										kind: "Name",
										value: "ID",
										loc: { start: 45, end: 47 },
									},
									loc: { start: 45, end: 47 },
								},
								loc: { start: 45, end: 48 },
							},
							directives: [],
							loc: { start: 41, end: 48 },
						},
					],
					type: {
						kind: "NamedType",
						name: {
							kind: "Name",
							value: "Product",
							loc: { start: 51, end: 58 },
						},
						loc: { start: 51, end: 58 },
					},
					directives: [],
					loc: { start: 33, end: 58 },
				},
			],
			loc: { start: 11, end: 60 },
		},
		{
			kind: "ObjectTypeDefinition",
			name: { kind: "Name", value: "Product", loc: { start: 67, end: 74 } },
			interfaces: [],
			directives: [],
			fields: [
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "id", loc: { start: 79, end: 81 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: { kind: "Name", value: "ID", loc: { start: 83, end: 85 } },
							loc: { start: 83, end: 85 },
						},
						loc: { start: 83, end: 86 },
					},
					directives: [],
					loc: { start: 79, end: 86 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "name", loc: { start: 89, end: 93 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 95, end: 101 },
							},
							loc: { start: 95, end: 101 },
						},
						loc: { start: 95, end: 102 },
					},
					directives: [],
					loc: { start: 89, end: 102 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "slug", loc: { start: 105, end: 109 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 111, end: 117 },
							},
							loc: { start: 111, end: 117 },
						},
						loc: { start: 111, end: 118 },
					},
					directives: [],
					loc: { start: 105, end: 118 },
				},
				{
					kind: "FieldDefinition",
					name: {
						kind: "Name",
						value: "description",
						loc: { start: 121, end: 132 },
					},
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "String",
								loc: { start: 134, end: 140 },
							},
							loc: { start: 134, end: 140 },
						},
						loc: { start: 134, end: 141 },
					},
					directives: [],
					loc: { start: 121, end: 141 },
				},
				{
					kind: "FieldDefinition",
					name: { kind: "Name", value: "price", loc: { start: 144, end: 149 } },
					arguments: [],
					type: {
						kind: "NonNullType",
						type: {
							kind: "NamedType",
							name: {
								kind: "Name",
								value: "Int",
								loc: { start: 151, end: 154 },
							},
							loc: { start: 151, end: 154 },
						},
						loc: { start: 151, end: 155 },
					},
					directives: [],
					loc: { start: 144, end: 155 },
				},
			],
			loc: { start: 62, end: 157 },
		},
	],
	loc: { start: 0, end: 158 },
} as unknown as DocumentNode;
