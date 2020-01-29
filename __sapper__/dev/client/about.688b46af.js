import { S as SvelteComponentDev, i as init, d as dispatch_dev, s as safe_not_equal, a as space, e as element, t as text, D as query_selector_all, g as detach_dev, h as claim_space, c as claim_element, b as children, f as claim_text, j as add_location, k as attr_dev, m as insert_dev, o as append_dev, n as noop } from './index.244e688c.js';

/* src/routes/about.svelte generated by Svelte v3.17.3 */
const file = "src/routes/about.svelte";

function create_fragment(ctx) {
	let t0;
	let div2;
	let div1;
	let div0;
	let p0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let p2;
	let t5;
	let t6;
	let p3;
	let t7;
	let a;
	let t8;
	let t9;

	const block = {
		c: function create() {
			t0 = space();
			div2 = element("div");
			div1 = element("div");
			div0 = element("div");
			p0 = element("p");
			t1 = text("this is an experiment");
			t2 = space();
			p1 = element("p");
			t3 = text("this program is built on bootstrap grid");
			t4 = space();
			p2 = element("p");
			t5 = text("all components here are built on the grid, plus utilities");
			t6 = space();
			p3 = element("p");
			t7 = text("visit css library ");
			a = element("a");
			t8 = text("cssgui");
			t9 = text(" to check out the [s]css code");
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-19drfzi\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			div2 = claim_element(nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div1 = claim_element(div2_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			p0 = claim_element(div0_nodes, "P", {});
			var p0_nodes = children(p0);
			t1 = claim_text(p0_nodes, "this is an experiment");
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(div0_nodes);
			p1 = claim_element(div0_nodes, "P", {});
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "this program is built on bootstrap grid");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(div0_nodes);
			p2 = claim_element(div0_nodes, "P", {});
			var p2_nodes = children(p2);
			t5 = claim_text(p2_nodes, "all components here are built on the grid, plus utilities");
			p2_nodes.forEach(detach_dev);
			t6 = claim_space(div0_nodes);
			p3 = claim_element(div0_nodes, "P", {});
			var p3_nodes = children(p3);
			t7 = claim_text(p3_nodes, "visit css library ");
			a = claim_element(p3_nodes, "A", { href: true });
			var a_nodes = children(a);
			t8 = claim_text(a_nodes, "cssgui");
			a_nodes.forEach(detach_dev);
			t9 = claim_text(p3_nodes, " to check out the [s]css code");
			p3_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			div2_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			document.title = "fantasyui.com";
			add_location(p0, file, 19, 6, 329);
			add_location(p1, file, 20, 6, 364);
			add_location(p2, file, 21, 6, 417);
			attr_dev(a, "href", "https://github.com/fantasyui-com/cssgui");
			add_location(a, file, 22, 27, 509);
			add_location(p3, file, 22, 6, 488);
			attr_dev(div0, "class", "col pb-3 text-white bg-dark rounded shadow");
			add_location(div0, file, 18, 4, 266);
			attr_dev(div1, "class", "row row-cols-1 row-cols-md-2 row-cols-xl-4");
			add_location(div1, file, 16, 4, 204);
			attr_dev(div2, "class", "container-fluid text-muted");
			add_location(div2, file, 15, 0, 159);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, div2, anchor);
			append_dev(div2, div1);
			append_dev(div1, div0);
			append_dev(div0, p0);
			append_dev(p0, t1);
			append_dev(div0, t2);
			append_dev(div0, p1);
			append_dev(p1, t3);
			append_dev(div0, t4);
			append_dev(div0, p2);
			append_dev(p2, t5);
			append_dev(div0, t6);
			append_dev(div0, p3);
			append_dev(p3, t7);
			append_dev(p3, a);
			append_dev(a, t8);
			append_dev(p3, t9);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(div2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJvdXQuNjg4YjQ2YWYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
