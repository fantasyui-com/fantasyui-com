import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, D as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, j as add_location, k as attr_dev, m as insert_dev, o as append_dev, n as noop } from './index.e96ecc17.js';

/* src/routes/about.svelte generated by Svelte v3.17.3 */
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let div3;
	let div2;
	let div0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let p2;
	let t5;
	let a;
	let t6;
	let t7;
	let div1;

	const block = {
		c: function create() {
			t0 = space();
			div3 = element("div");
			div2 = element("div");
			div0 = element("div");
			p0 = element("p");
			t1 = text("this program is built on bootstrap grid");
			t2 = space();
			p1 = element("p");
			t3 = text("all components are purely built on grid, plus utilities");
			t4 = space();
			p2 = element("p");
			t5 = text("css library ");
			a = element("a");
			t6 = text("cssgui");
			t7 = space();
			div1 = element("div");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-19drfzi\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div3 = claim_element(nodes, "DIV", { class: true });
			var div3_nodes = children(div3);
			div2 = claim_element(div3_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div0 = claim_element(div2_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "this program is built on bootstrap grid");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "all components are purely built on grid, plus utilities");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t5 = claim_text(p2_nodes, "css library ");
			a = claim_element(p2_nodes, "A", { href: true });
			var a_nodes = children(a);
			t6 = claim_text(a_nodes, "cssgui");
			a_nodes.forEach(detach_dev);
			p2_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t7 = claim_space(div2_nodes);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			div3_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fantasyui.com";
			add_location(p0, file, 18, 6, 307);
			add_location(p1, file, 19, 6, 360);
			attr_dev(a, "href", "https://github.com/fantasyui-com/cssgui");
			add_location(a, file, 20, 21, 444);
			add_location(p2, file, 20, 6, 429);
			attr_dev(div0, "class", "col pb-3 text-white");
			add_location(div0, file, 17, 4, 267);
			attr_dev(div1, "class", "col pb-3");
			add_location(div1, file, 23, 4, 525);
			attr_dev(div2, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div2, file, 15, 4, 205);
			attr_dev(div3, "class", "container-fluid text-muted");
			add_location(div3, file, 14, 0, 160);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div3, anchor);
			append_dev(div3, div2);
			append_dev(div2, div0);
			append_dev(div0, p0);
			append_dev(p0, t1);
			append_dev(div0, t2);
			append_dev(div0, p1);
			append_dev(p1, t3);
			append_dev(div0, t4);
			append_dev(div0, p2);
			append_dev(p2, t5);
			append_dev(p2, a);
			append_dev(a, t6);
			append_dev(div2, t7);
			append_dev(div2, div1);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div3);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "About",
			options,
			id: create_fragment.name
		});
	}
}

export default About;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuODU2ZmNlYjIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
