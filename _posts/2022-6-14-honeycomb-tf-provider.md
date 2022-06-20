---
layout: post
title: "Code: Honeycomb terraform provider"
categories: code
---

* Makefile is nice and clean. I didn't realize tf format was so easy to add. I might just do that at work :)
* Making a terraform module looks straightforward enough. The code was easy to read and matches my thoughts around how tf works
* Go is readable but I do need to play with it a bit more if I want to hold on to being able to "think in go". I do work at a java shop primarily so most of my cycles go there. Go has always felt nicer than python for server side tools to me
* [source](https://github.com/honeycombio/terraform-provider-honeycombio)

```makefile
build:
	go build -o terraform-provider-honeycombio

testacc:
	TF_ACC=1 go test -v ./...

fmt:
	goimports -l -w .
	go mod tidy
	terraform fmt --recursive

# Terraform 0.13+ only: build the repository and install the provider in one of
# the local mirror directories following the new fileystem layout. Additionally,
# we have to specify a version.
#
# https://www.terraform.io/docs/commands/cli-config.html#implied-local-mirror-directories
# https://www.terraform.io/upgrade-guides/0-13.html#new-filesystem-layout-for-local-copies-of-providers

version = 99.0.0
os_arch = $(shell go env GOOS)_$(shell go env GOARCH)
provider_path = registry.terraform.io/honeycombio/honeycombio/$(version)/$(os_arch)/

install_macos:
	go build -o terraform-provider-honeycombio_$(version)

	mkdir -p ~/Library/Application\ Support/io.terraform/plugins/$(provider_path)
	cp terraform-provider-honeycombio_$(version)  ~/Library/Application\ Support/io.terraform/plugins/$(provider_path)

uninstall_macos:
	rm -r ~/Library/Application\ Support/io.terraform/plugins/registry.terraform.io/honeycombio

.PHONY: build testacc install
```
