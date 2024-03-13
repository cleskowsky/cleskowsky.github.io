---
layout: post
title:  "Beautiful bash"
categories: bash series
---

```shell
#!/bin/sh
# SPDX-FileCopyrightText: 2017-2022 Pleroma Authors <https://pleroma.social>
# SPDX-License-Identifier: CC-BY-4.0

xinclude() {
	xmllint --noent --xinclude --noxincludenode "${1:--}" \
	| sed 's; xml:base=\"[^\"]*\";;g'
}

gen_blog() {
	test -n "$1"

	for page in $(find "source/$1" -type f -name '*.markdown')
	do
		page_out=$(echo "$page" | sed -e 's;^source;build;' -e 's;.markdown$;/index.html;')
		page_dir=$(dirname "$page_out")
		mkdir -p "$page_dir"

		SRCDIR="file://${PWD}" blog_target="$1" ./build_article.sh "$page" \
		| xinclude \
		> "$page_out"

		test -f "$page_out"
	done

	./build_blog_index.sh "$1" \
	| xinclude \
	> "build/${1}/index.html"

	test -f "build/${1}/index.html"

	./build_blog_feed.sh "$1" \
	> "build/${1}/feed.xml"
}

set -ex

cd $(dirname $0)

mkdir -p build
rm -r build/* || :

cp -r source/images source/stylesheets source/scripts build/

SRCDIR="file://${PWD}" TITLE="Pleroma Blog" gen_blog blog
SRCDIR="file://${PWD}" TITLE="Pleroma News" gen_blog announcements

for page in $(find source -type f -name '*.xhtml')
do
	page_out=$(echo "$page" | sed -e 's;^source;build;' -e 's;.xhtml$;.html;')
	page_dir=$(dirname "$page_out")
	mkdir -p "$page_dir"
	xinclude "$page" > "$page_out"

	test -f "$page_out"
done
```